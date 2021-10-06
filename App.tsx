import React, {useState} from 'react';
import {Button, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native-ui-lib';
import RootStack from './src/nav/RootStack';

// interface IRefCountUI {
//   toggleUI: () => void;
// }

// // khi can update UI, chi render Ui can update, cac UI k lien quan thi tim cach k render lai
// // khi rendere component parent thi rerender cac component child

// //React.memo check cac props truyen vao component child, neu ma thay doi thi reRender theo component parent

// const CountUI = React.memo(
//   React.forwardRef<IRefCountUI>((props, ref) => {
//     const [showCount, setShowCount] = React.useState<boolean>(true);
//     const [count, setcount] = useState(0);
//     console.log('render Countui');

//     React.useImperativeHandle(ref, () => {
//       return {
//         toggleUI: () => setShowCount(!showCount),
//       };
//     });

//     if (!showCount) return null;
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text style={{fontSize: 50}}>{count}</Text>
//         <Button
//           title="Plus"
//           onPress={() => {
//             setcount(count + 1);
//           }}
//         />
//       </View>
//     );
//   }),
// );

const App = () => {
  return <RootStack />;
  // console.log('render App');
  // const [renderApp, setRenderApp] = React.useState<boolean>(false);
  // const refCountUi = React.useRef<IRefCountUI>(null);
  // return (
  //   <SafeAreaView style={{flex: 1}}>
  //     <CountUI ref={refCountUi} />

  //     <Button title="renderApp" onPress={() => setRenderApp(!renderApp)} />

  //     <Button
  //       title="show/hide Count"
  //       onPress={() => {
  //         refCountUi.current?.toggleUI();
  //       }}
  //     />

  //     <View style={{flex: 1}}>
  //       <Text>Yo bro</Text>
  //       <FlatList
  //         data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  //         renderItem={({item, index}) => {
  //           return (
  //             <View
  //               style={{height: 50, marginBottom: 10, backgroundColor: 'red'}}>
  //               <Text>{item}</Text>
  //             </View>
  //           );
  //         }}
  //         keyExtractor={item => item.toString()}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
