import React, { memo } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Marker } from "react-native-maps";

const ClusteredMarker = ({
   geometry,
   properties,
   onPress,
   clusterColor,
   clusterTextColor,
   clusterFontFamily,
   tracksViewChanges,
   keytest
}) => {
   const points = properties.point_count;
   // const { width, height, fontSize, size } = returnMarkerStyle(points);

   const width = 35;
   const height = 35;
   const borderRadius = 10;
   const borderWidth = 2;

   console.log("picturepaths", properties.picturePaths)

   return (
      <Marker
         anchor={{ x: 0.5, y: 0.5 }}
         key={`${geometry.coordinates[0]}_${geometry.coordinates[1]}`}
         coordinate={{
            longitude: geometry.coordinates[0],
            latitude: geometry.coordinates[1],
         }}
         style={{ zIndex: points + 1 }}
         onPress={onPress}
         tracksViewChanges={tracksViewChanges}
      >
         {/* <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.container, { width, height }]}
         >
            <View
               style={[
                  styles.wrapper,
                  {
                     backgroundColor: clusterColor,
                     width,
                     height,
                     borderRadius: width / 2,
                  },
               ]}
            />
            <View
               style={[
                  styles.cluster,
                  {
                     backgroundColor: clusterColor,
                     width: size,
                     height: size,
                     borderRadius: size / 2,
                  },
               ]}
            >
               <Text
                  style={[
                     styles.text,
                     {
                        color: clusterTextColor,
                        fontSize,
                        fontFamily: clusterFontFamily,
                     },
                  ]}
               >
                  {points}
               </Text>

               <ShopSvg width={30} height={30} />


            </View>
         </TouchableOpacity> */}


         <View style={{ width: width * 1.5, height: height * 1.5, justifyContent: "center", alignItems: "center" }}>
            <View>
               <Image source={{ uri: properties.picturePaths ? properties.picturePaths.xs : null }} style={{ zIndex: 10, width, height, borderWidth, backgroundColor: clusterColor, borderColor: clusterTextColor, borderRadius }} />
               {points >= 2
                  ? <View style={{
                     zIndex: 9, position: "absolute", top: 4, width, height, borderWidth, backgroundColor: clusterColor, borderColor: clusterTextColor, borderRadius, shadowColor: "black",
                     shadowOffset: { width: -1, height: 2 },
                     shadowOpacity: 0.2,
                     shadowRadius: 2
                  }} />
                  : null}
               {points >= 30
                  ? <View style={{
                     zIndex: 8, position: "absolute", top: 8, width, height, borderWidth, backgroundColor: clusterColor, borderColor: clusterTextColor, borderRadius, shadowColor: "black",
                     shadowOffset: { width: -1, height: 2 },
                     shadowOpacity: 0.2,
                     shadowRadius: 2
                  }} />
                  : null}
            </View>
         </View>
      </Marker>
   );
};

const styles = StyleSheet.create({
   container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   wrapper: {
      position: "absolute",
      opacity: 0.5,
      zIndex: 0,
   },
   cluster: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
   },
   text: {
      fontWeight: "bold",
   },
});

export default memo(ClusteredMarker);
