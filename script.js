function searchHotel() {

    let location = document.getElementById("location").value;

    let checkin = document.getElementById("checkin").value;

    let checkout = document.getElementById("checkout").value;

    let guests = document.getElementById("guests").value;


    // Check empty fields

    if (location === "" ||
        checkin === "" ||
        checkout === "") {

        alert("Please fill all booking details.");

        return;
    }


    // Check dates

    if (checkout <= checkin) {

        alert("Check-out date must be after check-in date.");

        return;
    }


    alert(
        "🏨 Hotels Found!\n\n" +
        "Location: " + location + "\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout + "\n" +
        "Guests: " + guests
    );
}



function bookRoom(roomName, price) {

    let checkin = document.getElementById("checkin").value;

    let checkout = document.getElementById("checkout").value;


    if (checkin === "" || checkout === "") {

        alert("Please select your check-in and check-out dates first.");

        return;
    }


    if (checkout <= checkin) {

        alert("Please select valid dates.");

        return;
    }


    alert(
        "🎉 Booking Started!\n\n" +
        "Room: " + roomName + "\n" +
        "Price: ₹" + price + " / Night\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout
    );
}
