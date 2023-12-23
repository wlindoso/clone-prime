import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const MovieCard = (props: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.img}
        source={props.movieURL}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
  },
  img: {
    marginRight: 20,
  },
});
