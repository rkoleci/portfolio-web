import { Grid } from "@chakra-ui/react";

export default function GridList<T>({
  data,
  renderItem,
  onItemClick,
}: {
  data: Array<T>;
  renderItem: (props: T) => JSX.Element;
  onItemClick: (item: T) => T;
}) {
  const ListItem = renderItem;

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      width="full"
    >
      {data.map((item: T) => (
        <ListItem {...item} onItemClick={() => onItemClick(item)} />
      ))}
    </Grid>
  );
}
