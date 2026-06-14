const reminder = [
    {
        title: "Study Javascript",
        category: "Study",
        data: "2026-06-13",
        time: "7:00",
        whatsapp: "5516994301449",
        status: "pending"
    },
    {
        title: "Train",
        category: "Physical exercises",
        data: "2026-06-13",
        time: "8:00",
        whatsapp: "5516994301449",
        status: "pending"
    },
    {
        title: "Work",
        category: "Work",
        data: "2026-06-13",
        time: "6:00",
        whatsapp: "5516994301449",
        status: "pending"
    }
]

function listReminders () {
    for (let i = 0; i < reminder.length; i++) {
        console.log(reminder[i].title + " | " + 
                    reminder[i].category + " | " + 
                    reminder[i].time + " | " + 
                    reminder[i].status)
    }
}

function completeReminder (item) {
    reminder.forEach(element => {
        if (element.title == item) {
            element.status = "completed"
        }
    });
}

function addReminder () {
    let newReminder = {
        title: "Study English",
        category: "Study",
        data: "2026-06-13",
        time: "7:00",
        whatsapp: "5516994301449",
        status: "pending"
    }
    reminder.push(newReminder)
}

function removeReminder (item) {
    const newListReminder = reminder.filter(element => {
        if (element.title != item) {
            return true
        } else {
            return false
        }
    })

    console.log(newListReminder)
}

function editReminder () {
    reminder[3] = {
        title: "Study English",
        category: "Study",
        data: "2026-06-13",
        time: "10:00",
        whatsapp: "5516994301449",
        status: "pending"
    }

}

addReminder()
editReminder()
removeReminder("Study Javascript")
completeReminder("Work")
listReminders("")