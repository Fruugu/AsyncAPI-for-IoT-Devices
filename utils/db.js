
let database = [
    { topic: "room/5/temperature/5/measured", id: 5, temperature: 25, sentAt: new Date().toISOString() },
    { topic: "room/5/temperature/5/measured", id: 5, temperature: 22, sentAt: new Date().toISOString() }
];

function addData(topic, data) {
    if (!Array.isArray(data)) {
        data = [data];
    }

    data.forEach(item => {
        if (topic && item.id && item.temperature && item.sentAt) {
            database.push({
                ...item,
                id: item.id,
                topic: topic,
                temperature: item.temperature,
                sentAt: item.sentAt
            });
        }
    });
}

function getDataByTopic(topic) {
    return database.filter(item => item.topic === topic);
}

module.exports = { addData, getDataByTopic };