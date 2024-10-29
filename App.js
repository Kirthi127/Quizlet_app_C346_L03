import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Text, TextInput, View, Alert, Image, ScrollView } from 'react-native';


const InputBox = ({ label, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput onChangeText={onChangeText} />
        </View>
    );
};

const App = () => {
    const [typeAnswer, setTypeAnswer] = useState("");
    const [nameAnswer, setNameAnswer] = useState("");
    const [flyAnswer, setFlyAnswer] = useState("");

    const handleSubmit = () => {

        const correctAnswers = {
            typeAnswer: "False",
            nameAnswer: "deer",
            flyAnswer: "no"
        };

        let score = 0;
        if (typeAnswer === correctAnswers.typeAnswer) score++;
        if (nameAnswer.toLowerCase() === correctAnswers.nameAnswer) score++;
        if (flyAnswer.toLowerCase() === correctAnswers.flyAnswer) score++;


        let feedback = "";
        if (score === 3) {
            feedback = "Well done!";
        } else if (score > 0) {
            feedback = "Good effort, but you can do better!";
        } else {
            feedback = "You can do better next time.";
        }

        Alert.alert(`You got ${score} out of 3 correct! ${feedback}`);
    };

    return (
        <ScrollView>
            <StatusBar hidden={true} />
            <Text>Welcome to the Animal Quiz</Text>


            <Image source={require("./img/crocodile.jpg")} style={{ width: 500, height: 300 }} />
            <Text>"Crocodile is an amphibian." Is this statement true or false?</Text>
            <RNPickerSelect
                onValueChange={(value) => setTypeAnswer(value)}
                items={[
                    { label: 'True', value: 'True' },
                    { label: 'False', value: 'False' }
                ]}
            />


            <Image source={require("./img/deer.jpg")} style={{ width: 500, height: 300 }} />
            <InputBox
                label="What animal is this? Answer without caps"
                onChangeText={(text) => setNameAnswer(text)}
            />


            <Image source={require("./img/peacock.jpg")} style={{ width: 500, height: 300 }} />
            <InputBox
                label="Can this animal fly? Answer with yes or no"
                onChangeText={(text) => setFlyAnswer(text)}
            />


            <Button title="Submit Answers" onPress={handleSubmit} />
        </ScrollView>
    );
};

export default App;
