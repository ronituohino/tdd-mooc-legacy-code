export class Item {
  constructor(name, sellIn, quality, conjured) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured || false;
  }
}

export class Shop {
  static SULFURAS = "Sulfuras, Hand of Ragnaros";
  static AGED_BRIE = "Aged Brie";
  static TAFKAL80ETC = "Backstage passes to a TAFKAL80ETC concert";

  MIN_QUALITY;
  MAX_QUALITY;

  constructor(items = []) {
    this.items = items;
    this.MIN_QUALITY = 0;
    this.MAX_QUALITY = 50;
  }

  updateItem(item) {
    switch (item.name) {
      case Shop.SULFURAS:
        // Legendary item, stay the same
        return item;
      case Shop.TAFKAL80ETC:
        // Concert ticket gets more expensive over time
        if (item.quality < this.MAX_QUALITY) {
          item.quality += 1;
        }
        if (item.sellIn < 11 && item.quality < this.MAX_QUALITY) {
          item.quality += 1;
        }
        if (item.sellIn < 6 && item.quality < this.MAX_QUALITY) {
          item.quality += 1;
        }
        item.sellIn -= 1;
        // Except after the concert the quality is 0
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        return item;
      case Shop.AGED_BRIE:
        // Actually gets better over time
        if (item.quality < this.MAX_QUALITY) {
          item.quality += 1;
        }
        item.sellIn -= 1;
        // And twice as fast after expiry
        if (item.sellIn < 0 && item.quality < this.MAX_QUALITY) {
          item.quality += 1;
        }
        return item;
      default:
        // Normal items
        if (item.quality > this.MIN_QUALITY) {
          item.quality -= 1;
        }
        if (item.conjured && item.quality > this.MIN_QUALITY) {
          item.quality -= 1;
        }
        item.sellIn -= 1;
        // Past sell date
        if (item.sellIn < 0) {
          if (item.quality > this.MIN_QUALITY) {
            item.quality -= 1;
          }
          if (item.conjured && item.quality > this.MIN_QUALITY) {
            item.quality -= 1;
          }
        }
        return item;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i] = this.updateItem(this.items[i]);
    }

    return this.items;
  }
}
