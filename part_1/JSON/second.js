// https://learn.javascript.ru/json#isklyuchit-obratnye-ssylki
let room = {
    number: 23
};

let meetup = {
    title: "",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, replacer = (key, value) => {
    return (key !== '' && value === meetup) ? undefined : value;
}));