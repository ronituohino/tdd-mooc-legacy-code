import { describe, test, beforeEach } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("shop is initialized empty", () => {
    const gildedRose = new Shop();
    expect(gildedRose.items).to.deep.equal([]);
  });
  test("does something with Aged Brie", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", -1, 0),
      new Item("Aged Brie", -1, 10),
      new Item("Aged Brie", 0, 0),
      new Item("Aged Brie", 0, 10),
      new Item("Aged Brie", 0, 50),
      new Item("Aged Brie", 0, 90),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("Aged Brie", -2, 2),
      new Item("Aged Brie", -2, 12),
      new Item("Aged Brie", -1, 2),
      new Item("Aged Brie", -1, 12),
      new Item("Aged Brie", -1, 50),
      new Item("Aged Brie", -1, 90),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 1, 0),
      new Item("Sulfuras, Hand of Ragnaros", -1, 10),
      new Item("Sulfuras, Hand of Ragnaros", 0, 50),
      new Item("Sulfuras, Hand of Ragnaros", 0, 100),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("Sulfuras, Hand of Ragnaros", -1, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 1, 0),
      new Item("Sulfuras, Hand of Ragnaros", -1, 10),
      new Item("Sulfuras, Hand of Ragnaros", 0, 50),
      new Item("Sulfuras, Hand of Ragnaros", 0, 100),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 47),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 60),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 13),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with foo", () => {
    const gildedRose = new Shop([
      new Item("foo", -1, 0),
      new Item("foo", 0, 0),
      new Item("foo", 0, 60),
      new Item("foo", 1, 0),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("foo", -2, 0),
      new Item("foo", -1, 0),
      new Item("foo", -1, 58),
      new Item("foo", 0, 0),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
});
