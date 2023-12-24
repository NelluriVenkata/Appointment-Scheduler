const appointmentsData = {
  "2023-12-24": ["10:00 AM - Meeting with Client", "2:00 PM - Team Discussion"],
  "2023-12-25": ["1:00 PM - Lunch Meeting", "4:00 PM - Doctor's Appointment"],
  // Add more appointments here
};

function showAppointments() {
  const selectedDate = document.getElementById("date").value;
  const appointmentsDiv = document.getElementById("appointments");

  if (appointmentsData[selectedDate]) {
    const appointments = appointmentsData[selectedDate];
    let html = "<h2>Appointments for " + selectedDate + "</h2><ul>";
    appointments.forEach(appointment => {
      html += "<li>" + appointment + "</li>";
    });
    html += "</ul>";
    appointmentsDiv.innerHTML = html;
  } else {
    appointmentsDiv.innerHTML = "<p>No appointments for this date</p>";
  }
}
