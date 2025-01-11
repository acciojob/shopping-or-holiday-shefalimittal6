//your code here
// JavaScript to log the lists with data-ns-test attributes
window.onload = function() {
    // Accessing the shopping list items
    const shoppingItems = document.querySelectorAll('li[data-ns-test="shoppingList"]');
    shoppingItems.forEach(item => {
        console.log("Shopping Item:", item.textContent);
    });

    // Accessing the holiday list items
    const holidayItems = document.querySelectorAll('li[data-ns-test="holidayList"]');
    holidayItems.forEach(item => {
        console.log("Holiday Destination:", item.textContent);
    });
}
