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
        this.items[i].quality -= 1;
      }

      if ([Shop.AGED_BRIE, Shop.TAFKA].includes(item.name)) {
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
          if (this.items[i].name == Shop.TAFKA) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != Shop.SULFURAS) {
        this.items[i].sellIn -= 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != Shop.AGED_BRIE) {
          if (this.items[i].name != Shop.TAFKA) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != Shop.SULFURAS) {
                this.items[i].quality -= 1;
              }
            }
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1;
          }
        }
      }
    }

    return this.items;
  }
}
