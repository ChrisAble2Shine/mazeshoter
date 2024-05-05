// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2d001000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000100000001000000000100000000000000020000000100000000000000000000000000000001010101020002000001000000000200000000000100010000020000000101000001000000000000000000000000000000020002000000000000000200000002000000010000000000000001000001000000000000000000000000000000020002000100010000000200010202000000000000010100000001000001000000000101010001010101010002020002000000000000000000000200000000000000000100000001000101000000000000000000000000000000000000010000000000000100010000010101010101000000000000000100000000000000000000000000000000000000000001000100000100000000000000000000000000000000000100000000000000000000000000010000000000000000000000000100000002000000000100000101000000000100000000000000000101010000000000000001010100000100000101000002000100000000000000000000000000000000000001010000000000000000000000000000000100000000000000000000020202020200000000000000000000000000010000000002020202020200000000000100000000010000010000000000010000000001010000000000000000000100000100000000000000000000010002000000000000000000000000010002000000010100000000000000020202000000000001000000000001000002000000000200000000000000000002000000000000000000000000000000000000000000000202020000000002000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
.......2.....................................
.......2........2...2....2.......2...2.......
........22222.2..2....2.....2.2..2...22..2...
............2.2.......2...2...2.......2..2...
............2.2.2.2...2.222......22...2..2...
.222.22222.22.2..........2........2...2.22...
...............2......2.2..222222.......2....
.................2.2..2.................2....
.........2............2...2....2..22....2....
....222.......222..2..22..2.2................
..22...............2..........22222..........
...2....222222.....2....2..2.....2....22.....
....2..2..........2.2............2.2...22....
...222.....2.....2..2....2.........2.........
.............222....2....2...................
.............................................
`, [myTiles.transparency16,sprites.castle.saplingOak,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
