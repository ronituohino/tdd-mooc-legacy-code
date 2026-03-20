import { describe, test, beforeEach } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("does something with Aged Brie", () => {
    const gildedRose = new Shop([
      new Item("Aged Brie", 0, 0),
      new Item("Aged Brie", 0, 10),
      new Item("Aged Brie", 0, 90),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [new Item("Aged Brie", -1, 2), new Item("Aged Brie", -1, 12), new Item("Aged Brie", -1, 90)];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 25),
      new Item("Sulfuras, Hand of Ragnaros", 0, 100),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 25),
      new Item("Sulfuras, Hand of Ragnaros", 0, 100),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 60),
    ]);
    const items = gildedRose.updateQuality();
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
    ];
    expect(items).to.deep.equal(expectedResult);
  });
  test("does something with foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0), new Item("foo", 0, 60)]);
    const items = gildedRose.updateQuality();
    const expectedResult = [new Item("foo", -1, 0), new Item("foo", -1, 58)];
    expect(items).to.deep.equal(expectedResult);
  });
});
