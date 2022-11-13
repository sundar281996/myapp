function Colorbox({ name }) {
  const styles = {
    width: "250px",
    height: "25px",
    backgroundColor: name,
    marginTop: "10px",
    gap: "16px",
  };
  return <div style={styles}></div>;
}
export default Colorbox;
