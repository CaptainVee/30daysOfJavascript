// Storage Controller

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
		items: [
			// {id: 0, name:'Ewa', calories:1500},
			// {id: 1, name:'beans', calories:500},
			// {id: 2, name:'dodo', calories:1000}
		],
		currentItem: null,
		totalCaloriies: 0
	}

	return {
		getItems: function(){
			return data.items
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
		addBtn: '.add-btn',
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
		clearInput: function(){
			document.querySelector(UIselectors.itemNameInput).value = ''
			document.querySelector(UIselectors.itemCaloriesInput).value = ''
		},
		showTotalCalories: function (totalCalories) {
			document.querySelector(UIselectors.totalCaloriesUI).textContent = totalCalories
		},
		getSelectors: function(){
			return UIselectors
		}
	}

})()



// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl ){
	// Load event listeners
	const loadEventListeners = function(){
		// Get UI selector
		const UISelectors = UICtrl.getSelectors()

		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
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

			// Clear fields
			UICtrl.clearInput()
		}
		e.preventDefault()
	}
	return {
		init: function(){
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
})(ItemCtrl, UICtrl)

// Initialize App
AppCtrl.init()





