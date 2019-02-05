var dataArray = [
  [0,0,0,0,0,0], // DUMMY ROW FOR 1 INDEXING
  ["groggy",3,0,0,"bpm",0],
  ["clean n fresh",8,10,9,"bpm",0],
  ["motivated",9,4,3,"bpm",0],
  ["content",8,2,4,"bpm",0],
  ["sad",1,6,2,"bpm",0],
  ["hungry",1,10,2,"bpm",0],
  ["yeet",7,2,8,"bpm",0],
  ["bugly",6,3,6,"bpm",0],
  ["hungry",5,8,2,"bpm",0],
  ["thirsty ;)",4,7,10,"bpm",0],
  ["tired",3,4,4,"bpm",0],
  ["groggy",2,2,3,"bpm",0],
  ["ready for beddy",1,1,1,"bpm",0],
];

const MOOD = 0;
const ENERGY = 1;
const HUNGER = 2;
const HYDRATION = 3;
const HEART_RATE = 4;
const TEMP = 5;

function ID2INDEX(id) {

  if (id == "MOOD") {
    return MOOD;
  } else if (id == "ENERGY") {
    return ENERGY;
  } else if (id == "HUNGER") {
    return HUNGER;
  } else if (id == "HYDRATION") {
    return HYDRATION;
  } else if (id == "HEARTRATE") {
    return HEART_RATE;
  } else if (id == "TEMPERATURE") {
    return TEMP;
  }

}
