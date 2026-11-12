const currency_value = document.getElementById("currency_selection")
let cost_modifier = 1.0
let currency_symbol = " €"
let single_fare_base = 3.3
let day_fare_base = 17.2
let week_fare_base = 102.00
let hotel_a_night_base = 100
let restaurant_base = 25

currency_value.addEventListener("change", function() {
    let currency = currency_value.value
    switch (currency) {
        case "EUR":
            cost_modifier = 1.0
            currency_symbol = " €"
            break
        case "USD":
            cost_modifier = 1.25
            currency_symbol = " $"
            break
        case "GBP":
            cost_modifier = 0.85
            currency_symbol = " £"
            break
        case "TWD":
            cost_modifier = 36.0
            currency_symbol = " $"
            break
    }

    let single_fare_cost = single_fare_base * cost_modifier
    let day_fare_cost = day_fare_base * cost_modifier
    let week_fare_cost = week_fare_base * cost_modifier
    let hotel_a_night = hotel_a_night_base * cost_modifier
    let restaurant = restaurant_base * cost_modifier
    document.getElementById("single_fare_display").textContent = single_fare_cost.toFixed(2) + currency_symbol
    document.getElementById("day_fare_display").textContent = day_fare_cost.toFixed(2) + currency_symbol
    document.getElementById("week_fare_display").textContent = week_fare_cost.toFixed(2) + currency_symbol
    document.getElementById("hotel_a_night").textContent = hotel_a_night.toFixed(2) + currency_symbol
    document.getElementById("restaurant").textContent = restaurant.toFixed(2) + currency_symbol
});
