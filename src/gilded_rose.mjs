export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  static SULFURAS = "Sulfuras, Hand of Ragnaros";
  static AGED_BRIE = "Aged Brie";
  static TAFKAL80ETC = "Backstage passes to a TAFKAL80ETC concert";

  constructor(items = []) {
    this.items = items;
  }

  updateItem(item) {
    switch (item.name) {
      case Shop.SULFURAS:
        // Legendary item, stay the same
        return item;
      case Shop.TAFKAL80ETC:
        // Concert ticket gets more expensive over time
        if (item.quality < 50) {
          item.quality += 1;
        }
        if (item.sellIn < 11 && item.quality < 50) {
          item.quality += 1;
        }
        if (item.sellIn < 6 && item.quality < 50) {
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
        if (item.quality < 50) {
          item.quality += 1;
        }
        item.sellIn -= 1;
        // And twice as fast after expiry
        if (item.sellIn < 0 && item.quality < 50) {
          item.quality += 1;
        }
        return item;
      default:
        // Normal items
        if (item.quality > 0) {
          item.quality -= 1;
        }
        item.sellIn -= 1;
        // Past sell date
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality -= 1;
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
