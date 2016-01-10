gTile
-----
for cinnamon 2.x

This extension has been developped by vibou. Cinnamon-fork by shuairan.

[Cinnamon Spices: gTile](http://cinnamon-spices.linuxmint.com/extensions/view/21)

**Installation**:

Either install using the extensions manager or for manual installation:

clone from github

	git clone https://github.com/shuairan/gTile.git

then copy/move to extensions folder

	mv gTile ~/.local/share/cinnamon/extensions/gTile@shuairan

**Usage**:

  <kbd>Super</kbd>+<kbd>Space</kbd> open gTile  (you can change this on extension-settings)  
  then use mouse or keyboard:  
  <kbd>Esc</kbd> close gTile  
  <kbd>ARROWS</kbd> move with keyboard  
  <kbd>Shift</kbd>+<kbd>ARROWS</kbd> select area  
  <kbd>Space</kbd> or <kbd>Enter</kbd> tile the selected area  

**Additional Information**:

  Cinnamon has also an own window tiling function with various hotkeys [Learn more about it](http://segfault.linuxmint.com/2013/07/new-window-tiling-and-snapping-functionality/)  
  this extension will provide an other way to tile your window, via a small overlay on your currently focused application

**Changelog:**

* v0.7
    + Cinnamon 2.4
    + put all settings to extension setting screen
    + AutoTile: only tile non-minimized windows
    + AutoTile: improve on multi monitor (only tile windows in current screen)

* v0.6
    + merge some upstream changes from vibou.gTile (V21)
    + exclude some apps with no wm_class. This is a wild guess to find apps which should not be tiled (like Hangouts)
    + hide on escape
	+ better multi-monitor support
    + new feature: select and tile by keyboard (move with Arrows, Shift+Arrow to select area, space or enter to tile window)

for full changelog see CHANGELOG.md
