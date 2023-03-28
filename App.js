import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function App() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate,setSelectedDate]=useState("Select Date")
  const [selectedTime, setSelectedTime]=useState("Select Time")



  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const dt=new Date(date);
    const x=dt.toISOString().split("T");
    const x1=x[0].split("-");
    // console.log()
    setSelectedDate(x1[2]+"/"+x1[1]+"/"+x1[0])
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
   
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  
  };

  const handleTimeConfirm = (date) => {
    console.warn("A time has been picked: ",date);
    const dt=new Date(date);
    const x=dt.toLocaleTimeString();
    setSelectedTime(x)
    // console.log(x)
    hideTimePicker();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: "50%",
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          showDatePicker();
        }}
      >
        <Text>{selectedDate}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "50%",
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
        onPress={() => {
          showTimePicker();
        }}
      >
        <Text>{selectedTime}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
