import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  ScrollView,
} from 'react-native';
import ComponentStyles from '../common/Component.styles';
import {RadioButton, ProgressBar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DriverTip = [
  {id: 0, name: '$1'},
  {id: 1, name: '$5'},
  {id: 2, name: '$10'},
  {id: 3, name: 'Other'},
  {id: 4, name: 'No'},
];

const GoGreenTip = [
  {id: 0, name: '$1'},
  {id: 1, name: '$5'},
  {id: 2, name: '$10'},
  {id: 3, name: 'Other'},
  {id: 4, name: 'No'},
];

const Sample = () => {
  const [description, setDescription] = useState('');
  const [productCost, setProductCost] = useState('');
  const [insurance, setInsurance] = useState(false);
  const [driverNote, setDriverNote] = useState('');

  const [buttonIndexDriver, setButtonIndexDriver] = useState(0);
  const [buttonIndexGG, setButtonIndexGG] = useState(0);
  const [size, setSize] = useState(0.3);

  const storeData = async () => {
    try {
      const object = JSON.stringify({
        description: description,
        productCost: productCost,
        insurance: insurance,
        packageSize: size,
        DriverTip: DriverTip[buttonIndexDriver].name,
        GoGreenTip: GoGreenTip[buttonIndexGG].name,
        driverNote: driverNote,
      });
      console.log('OBJECT', object);
      await AsyncStorage.setItem('@object', object);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerText}>Product Details</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Product Type</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Description"
                  placeholderTextColor={ComponentStyles.COLORS.BLACK}
                  onChangeText={text => setDescription(text)}
                  defaultValue={description}
                />
              </View>
              <Text style={styles.descriptionText}>{desc1}</Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Product Cost</Text>
              <View style={styles.inputView}>
                <Text style={styles.titleText}>$</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Product Cost"
                  placeholderTextColor={ComponentStyles.COLORS.BLACK}
                  onChangeText={text => setProductCost(text)}
                  defaultValue={productCost}
                />
              </View>
              <Text style={styles.descriptionText}>{desc2}</Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Insurance</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  paddingVertical: 5,
                }}>
                <Text style={styles.subtitleText}>$ 0.0</Text>
                <Switch
                  trackColor={{
                    false: '#767577',
                    true: ComponentStyles.COLORS.ORANGE,
                  }}
                  thumbColor={
                    insurance ? ComponentStyles.COLORS.ORANGE : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setInsurance(value => !value)}
                  value={insurance}
                />
              </View>
              <Text style={styles.descriptionText}>{desc3}</Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Package size</Text>
              <RadioButton.Group
                onValueChange={value => setSize(value)}
                value={size}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <View style={styles.radioContainer}>
                    <Text style={styles.radioText}>Small</Text>
                    <RadioButton
                      value={0.3}
                      color={ComponentStyles.COLORS.ORANGE}
                    />
                  </View>
                  <View style={styles.radioContainer}>
                    <Text style={styles.radioText}>Medium</Text>
                    <RadioButton
                      value={0.6}
                      color={ComponentStyles.COLORS.ORANGE}
                    />
                  </View>
                  <View style={styles.radioContainer}>
                    <Text style={styles.radioText}>Large</Text>
                    <RadioButton
                      value={1}
                      color={ComponentStyles.COLORS.ORANGE}
                    />
                  </View>
                </View>
              </RadioButton.Group>
              <ProgressBar
                progress={size}
                color={ComponentStyles.COLORS.ORANGE}
                style={{height: 10, borderRadius: 3, margin: 5}}
              />
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Tip your driver</Text>

              <View style={styles.btnContainer}>
                {DriverTip.map((data, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setButtonIndexDriver(index)}
                      style={
                        index === buttonIndexDriver
                          ? [
                              styles.btn,
                              {
                                backgroundColor: ComponentStyles.COLORS.ORANGE,
                              },
                            ]
                          : styles.btn
                      }>
                      <Text
                        style={
                          index === buttonIndexDriver
                            ? [
                                styles.btnText,
                                {
                                  color: ComponentStyles.COLORS.WHITE,
                                },
                              ]
                            : styles.btnText
                        }>
                        {data.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={styles.descriptionText}>{desc4}</Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Support go green</Text>
              <View style={styles.btnContainer}>
                {GoGreenTip.map((data, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setButtonIndexGG(index)}
                      style={
                        index === buttonIndexGG
                          ? [
                              styles.btn,
                              {
                                backgroundColor: ComponentStyles.COLORS.ORANGE,
                              },
                            ]
                          : styles.btn
                      }>
                      <Text
                        style={
                          index === buttonIndexGG
                            ? [
                                styles.btnText,
                                {
                                  color: ComponentStyles.COLORS.WHITE,
                                },
                              ]
                            : styles.btnText
                        }>
                        {data.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Text style={styles.descriptionText}>{desc5}</Text>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.titleText}>Note for driver</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Add your notes"
                  placeholderTextColor="#8F9BB3"
                  numberOfLines={5}
                  multiline={true}
                  defaultValue={driverNote}
                  onChangeText={driverNoteText => setDriverNote(driverNoteText)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.submitButtonStyle}
              activeOpacity={0.5}
              onPress={() => storeData()}>
              <Text style={styles.buttonTextStyle}> ADD </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ComponentStyles.COLORS.WHITE,
  },
  container: {
    flex: 1,
    margin: 15,
  },
  headerText: {
    fontSize: 24,
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleText: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    fontSize: 16,
    marginHorizontal: 5,
  },
  subtitleText: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    fontSize: 14,
  },
  descriptionText: {
    textAlign: 'justify',
    margin: 5,
    color: ComponentStyles.COLORS.GRAY,
    fontFamily: ComponentStyles.FONT_FAMILY.SEMI_BOLD,
    fontSize: 13,
  },

  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 14,
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.SEMI_BOLD,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    marginVertical: 15,
    backgroundColor: '#faf1eb',
    borderRadius: 8,
    width: '100%',
  },
  btn: {
    width: ComponentStyles.WIDTH / 5.5,
    backgroundColor: '#faf1eb',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    color: ComponentStyles.COLORS.BLACK,
  },

  inputText: {
    height: 50,
    color: ComponentStyles.COLORS.BLACK,
    marginLeft: 10,
  },

  inputView: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ComponentStyles.COLORS.BORDER_COLOR,
    backgroundColor: ComponentStyles.COLORS.WHITE,
    height: 50,
    paddingHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submitButtonStyle: {
    height: 48,
    width: '100%',
    padding: 10,
    marginBottom: 34,
    marginTop: 28,
    backgroundColor: '#ED932B',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ED932B',
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
  },
  textArea: {
    width: '100%',
    height: 90,
    padding: 15,
    fontSize: 15,
    color: ComponentStyles.COLORS.BLACK,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  textAreaContainer: {
    borderColor: '#8F9BB3',
    borderWidth: 0.5,
    borderRadius: 8,
    top: 10,
  },
  noteText: {
    color: 'black',
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    marginBottom: 13,
  },
  sponsorText: {
    color: '#8F9BB3',
    fontSize: 12,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    marginBottom: 21,
  },
});
const desc1 =
  'Please explain the products you want to deliver. The driver will call you before the delivery to verify the details.';
const desc2 = 'Please add the cost of the products';
const desc3 =
  'Choose your insurance value in accordance with the value of your goods and needs.';
const desc4 =
  'Support your driver and make their day! 100% of your tip will be transferred to them.';
const desc5 =
  'We are sponsoring 15% of the total fare for carbon free environment. Support us to reduce carbon emission to save the earth!';
export default Sample;
