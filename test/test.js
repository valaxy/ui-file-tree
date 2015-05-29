define(function (require) {
	var $ = require('jquery')
	var FileTree = require('../src/index')


	var $root = $('.jstree')
	var fileTree = new FileTree($root)
	var _id = 0
	var id = function () {
		return _id++
	}


	var selectedId = null

	window.addRootDir = function () {
		console.log(fileTree.addItem({
			text: 'root' + id()
		}, null))
	}


	window.selectItem = function () {
		fileTree.selectItem('j1_3')
	}


	window.deleteItem = function () {
		fileTree.deleteItem(selectedId)
	}


	// test about event
	$root.on('selectItem', function (e, id) {
		selectedId = id
	})
})