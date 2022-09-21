// Storage Controller
const StorageCtrl = (function(){
	return {
		storeItem: function(item){
			let items

			// Check if any item in storage
			if (localStorage.getItem('items') === null) {
				items = []
				// Push the new item
				items.push(item)
				// send to LS
				localStorage.setItem('items', JSON.stringify(items))
			} else {
				// Get items in LS
				items = JSON.parse(localStorage.getItem('items'))

				// Push the new item
				items.push(item)

				// send to LS
				localStorage.setItem('items', JSON.stringify(items))

			}
			
		},

		getItemsFromLS: function(){
			let items

			// Check if any item in storage
			if (localStorage.getItem('items') === null) {
				items = []

			} else {
				// Get items in LS
				items = JSON.parse(localStorage.getItem('items'))

			}
			return items
		},

		updateItemStorage: function(updatedItem){
			let items = JSON.parse(localStorage.getItem('items'))
			items.forEach((item, index) =>{
				if (updatedItem.id = item.id) {
					item.splice(index, 1, updatedItem)
				}
			})
			localStorage.setItem('items', JSON.stringify(items))
		},

		deleteItemFromStorage: function(id){
			let items = JSON.parse(localStorage.getItem('items'))
			items.forEach((item, index) =>{
				if (id = item.id) {
					item.splice(index, 1)
				}
			})
			localStorage.setItem('items', JSON.stringify(items))			
		},

		clearAllFromStorage: function(){
			localStorage.removeItems('items')
		}
	}
})()



// Item Controller
const ItemCtrl = (function(){
	// Item constructor
	const Item = function(id, name, calories){
		this.id = id
		this.name = name
		this.calories = calories
	}
	
	// Data structure or State
	const data = {
		// items: [],
		items: StorageCtrl.getItemsFromLS(),
		currentItem: null,
		totalCaloriies: 0
	}

	return {
		getItems: function(){
			return data.items
		},
		getItemById: function(id){
			let found = null
			// Loop though the item
			data.items.forEach((item) =>{
				if (item.id === id) {
					found = item
				}
			})
			return found
		},

		updateItem: function(name, calories){
			calories = parseInt(calories)

			let found = null
			// Loop though the item
			data.items.forEach((item) =>{
				if (item.id === data.currentItem.id) {
					item.name = name
					item.calories = calories
					found = item
				}
			})
			return found
		},

		deleteItem: function(id){
			// Get ids
			const ids = data.items.map(function(item){
				return item.id
			})

			// Get index
			const index = ids.indexOf(id)

			// Remove item
			data.items.splice(index, 1)
		},
		clearAllItems: function(){
			data.items = []
		},
		addItem: function(name, calories){
			let ID
			// Create id
			if (data.items.length > 0) {
				ID = data.items[data.items.length -1].id + 1
			} else{
				ID = 0
			}

			// Input calories string to number
			calories = parseInt(calories)

			// Create new item
			newItem = new Item(ID, name, calories)
			// Push new item to list of data
			data.items.push(newItem)

			return newItem
		},
		setCurrentItem: function(item){
			data.currentItem = item
		},
		getCurrentItem: function(){
			return data.currentItem
		},
		getTotalCalories: function(){
			let total = 0

			data.items.forEach((item) =>{
				total += item.calories
			})
			data.totalCalories = total

			return data.totalCalories
		},
		logData: function () {
			return data
		}
	}

})()


// UI Controller
const UICtrl = (function(){
	const UIselectors = {
		itemListId: '#item-list',
		listItems: '#item-list li',
		addBtn: '.add-btn',
		clearBtn: '.clear-btn'
		updateBtn: '.update-btn',
		deleteBtn: '.delete-btn',
		backBtn: '.back-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#calories-name',
		totalCaloriesUI: '.total-calories'
	}

	return {
		populateItemList: function(items){
			let html = ''
			items.forEach((item) =>{
				html += `<li class="collection-item" id="item-${item.id}">
						<strong>${item.name}: </strong><em>${item.calories} Calories</em>
						<a href="#" class="secondary-content"><i class="edit-item fa-fa-pencil"></i></a>
						</li>`
			})

			// Insert list items
			document.querySelector(UIselectors.itemListId).innerHTML = html
		},

		getItemInput: function(){
			return {
				name: document.querySelector(UIselectors.itemNameInput).value,
				calories: document.querySelector(UIselectors.itemCaloriesInput).value
			}
		},
		addListItem: function(item){
			// Create li element
			const li = document.createElement('li')
			li.className = 'collection-item'
			li.id = `item-${item.id}`
			li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em>
							<a href="#" class="secondary-content">
							<i class="edit-item fa-fa-pencil"></i></a>`
			document.querySelector(UIselectors.itemListId).insertAdjacentElement('beforeend', li)

		},
		updateListItem: function(item){
			let listItems = document.querySelectorAll(UIselectors.listItems)

			// Turn node list into array
			listItems = Array.from(listItems)

			listItems.forEach((listItem) =>{
				const itemID = listItem.getAttribute('id')

				if (itemID === `item-${item.id}`) {
					document.querySelector(`#${itemID}`).innerHTML = `
							<strong>${item.name}: </strong><em>${item.calories} Calories</em>
							<a href="#" class="secondary-content">
							<i class="edit-item fa-fa-pencil"></i></a>`
				}
			})
		},
		deleteListItem: function(id){
			const itemID = `#item-${id}`
			const item = document.querySelector(itemID)
			item.remove()
		},
		clearInput: function(){
			document.querySelector(UIselectors.itemNameInput).value = ''
			document.querySelector(UIselectors.itemCaloriesInput).value = ''
		},
		addItemToForm: function(){
			document.querySelector(UIselectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
			document.querySelector(UIselectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
			UICtrl.showEditState()			
		},
		removeItems: function(){
			let listItems = document.querySelectorAll(UIselectors.listItems)

			// Turn node list into array
			listItems = Array.from(listItems)

			listItems.forEach((item) =>{
				item.remove()
			})
		},
		showTotalCalories: function (totalCalories) {
			document.querySelector(UIselectors.totalCaloriesUI).textContent = totalCalories
		},
		clearEditState: function(){
			UICtrl.clearInput()
			document.querySelector(UIselectors.updateBtn).style.display = 'none'
			document.querySelector(UIselectors.deleteBtn).style.display = 'none'
			document.querySelector(UIselectors.backBtn).style.display = 'none'
			document.querySelector(UIselectors.addBtn).style.display = 'inline'
		},
		showEditState: function(){
			document.querySelector(UIselectors.updateBtn).style.display = 'inline'
			document.querySelector(UIselectors.deleteBtn).style.display = 'inline'
			document.querySelector(UIselectors.backBtn).style.display = 'inline'
			document.querySelector(UIselectors.addBtn).style.display = 'none'
		},
		getSelectors: function(){
			return UIselectors
		}
	}

})()



// App Controller
const AppCtrl = (function(ItemCtrl, StorageCtrl, UICtrl ){

	// Load event listeners
	const loadEventListeners = function(){
		// Get UI selector
		const UISelectors = UICtrl.getSelectors()

		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)

		// Disable submit on enter
		document.addEventListener('keypress', function(e){
			if (e.keyCode === 13 || e.which ===13) {
				e.preventDefault()
				return false
			}
		})

		// Edit icon click event
		document.querySelector(UISelectors.itemListId).addEventListener('click', itemEditClick)

		// Update item event
		document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)

		// Delete item event
		document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)

		// Back button event
		document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)

		// Clear all button event
		document.querySelector(UISelectors.clearBtn).addEventListener('click', UICtrl.clearAllItemsClick)
	}

	// Add item submit
	const itemAddSubmit = function(e){
		// Get form input from UI controller
		const input = UICtrl.getItemInput()
		
		// Check for name and calorie input
		if(input.name !== '' && input.calories !== ''){
			// Add item
			const newItem = ItemCtrl.addItem(input.name, input.calories)

			// Add item to UI list
			UICtrl.addListItem(newItem)

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories()

			// Show total calories to UI
			UICtrl.showTotalCalories(totalCalories)

			// Store in local storage
			StorageCtrl.storeItem(newItem)

			// Clear fields
			UICtrl.clearInput()
		}
		e.preventDefault()
	}

	// Edit item click
	const itemEditClick = function(e){

		if (e.target.classList.contains('edit-item')) {
			// Get list item id
			const listId =e.target.parentNode.parentNode.id

			// Break into array
			const listIdArray = listId.split('-')

			// Get the actual id
			const id = parseInt(listIdArray[1])

			// Get the entire item
			const itemToEdit = ItemCtrl.getItemById(id)

			// Set current item
			ItemCtrl.setCurrentItem(itemToEdit)

			// Add item to form
			UICtrl.addItemToForm()
		}

		e.preventDefault()
	}

	// Update item submit
	const itemUpdateSubmit = function(e){
		// Get item input
		const input = UICtrl.getItemInput()

		// Update item
		const updatedItem = ItemCtrl.updateItem(input.name, input.calories)

		// Update UI
		UICtrl.updateListItem(updatedItem)

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories()

		// Show total calories to UI
		UICtrl.showTotalCalories(totalCalories)

		// Update LS
		StorageCtrl.updateItemStorage(updatedItem)

		UICtrl.clearEditState()

		e.preventDefault()
	}

	// Delete item submit
	const itemDeleteSubmit = function(e){
		// Get current Item
		const currentItem = ItemCtrl.getCurrentItem()

		// Delete from data structure
		ItemCtrl.deleteItem(currentItem.id)

		// Delete from UI
		UICtrl.deleteListItem(currentItem.id)

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories()

		// Show total calories to UI
		UICtrl.showTotalCalories(totalCalories)

		// Delete from LS
		StorageCtrl.deleteItemFromStorage(currentItem.id)

		UICtrl.clearEditState()

		e.preventDefault()
	}

	// Clear items event
	const clearAllItemsClick = function(){
		// Delete all items from data structure
		ItemCtrl.clearAllItems()

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories()

		// Show total calories to UI
		UICtrl.showTotalCalories(totalCalories)

		// Remove from UI
		UICtrl.removeItems()

		// Clear from LS
		StorageCtrl.clearAllFromStorage()

	}

	return {
		init: function(){
			// Clear edit state
			UICtrl.clearEditState()

			// Fetch Item from data structure
			const items = ItemCtrl.getItems()

			// Populate list with items
			UICtrl.populateItemList(items)

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories()

			// Show total calories to UI
			UICtrl.showTotalCalories(totalCalories)
			
			// Load event listeners
			loadEventListeners()
		}
	}
})(ItemCtrl, StorageCtrl, UICtrl)

// Initialize App
AppCtrl.init()





