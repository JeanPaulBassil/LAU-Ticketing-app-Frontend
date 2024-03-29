import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../common/Button";
import styles from "../../styles/home/modal";

const StudentNameModal = ({
  visible,
  onClose,
  onSubmit,
  studentName,
  setStudentName,
}: any) => {
  const [localName, setLocalName] = useState(studentName);

  useEffect(() => {
    if (visible) {
      setLocalName(studentName);
    }
  }, [studentName, visible]);

  const handleSubmit = async () => {
    onSubmit(localName);
    setLocalName("");
  };

  const handleCancel = () => {
    setLocalName("");
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "android" ? 75 : 0}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <View style={styles.centered_view}>
              <View style={styles.modal_view}>
                <Text style={styles.modal_text}>Enter Student Name</Text>
                <View style={styles.modal_text_underline} />
                <TextInput
                  placeholder="Student Name"
                  style={styles.modal_input}
                  placeholderTextColor={"#AAAAAA"}
                  value={localName}
                  onChangeText={setLocalName}
                />
                <View style={styles.modal_button_container}>
                  <Button
                    title="Cancel"
                    style={styles.cancel_button}
                    onPress={handleCancel}
                    textStyle={styles.button_text}
                  />
                  <Button
                    title="Submit"
                    style={styles.submit_button}
                    onPress={handleSubmit}
                    textStyle={styles.button_text}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default StudentNameModal;
