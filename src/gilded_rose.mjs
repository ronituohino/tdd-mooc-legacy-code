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
  static TAFKA = "Backstage passes to a TAFKAL80ETC concert";

  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (![Shop.AGED_BRIE, Shop.SULFURAS, Shop.TAFKA].includes(item.name) && item.quality > 0) {
        item.quality -= 1;
      }
      if ([Shop.AGED_BRIE, Shop.TAFKA].includes(item.name) && item.quality < 50) {
        item.quality += 1;
      }

      if (item.name == Shop.TAFKA) {
        if (item.sellIn < 11 && item.quality < 50) {
          item.quality += 1;
        }
        if (item.sellIn < 6 && item.quality < 50) {
          item.quality += 1;
        }
      }

      if (item.name != Shop.SULFURAS) {
        item.sellIn -= 1;
      }

      if (item.sellIn < 0) {
        if (item.name != Shop.AGED_BRIE) {
          if (item.name != Shop.TAFKA) {
            if (item.quality > 0) {
              if (item.name != Shop.SULFURAS) {
                item.quality -= 1;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality += 1;
          }
        }
      }
      this.items[i] = item;
    }

    return this.items;
  }
}
