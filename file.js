// Example 1: Add a guest to one event
function addAttendeeToEvent() {
    // Replace the below values with your own
    let attendeeEmail = 'kalender@students.amikom.ac.id'; // Email address of the person you need to add
    let calendarId = 'c_c7o7l947k3m9d58i7n397ijmro@group.calendar.google.com';
    let eventId = 'NnR1cHBiM2lkcTV2YXZwb2UzdXE4NHR2aDggY19jN283bDk0N2szbTlkNThpN24zOTdpam1yb0Bn'; // ID of event instance

    let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
        // Calendar not found
        console.log('Calendar not found', calendarId);
        return;
    }
    let event = calendar.getEventById(eventId);
    if (event === null) {
        // Event not found
        console.log('Event not found', eventId);
        return;
    }
    event.addGuest(attendeeEmail);
}
