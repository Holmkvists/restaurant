import { GenericButton } from "../../../../../components/GenericButton/GenericButton";

export const AdminTableRow = () => {
  return (
    <tr>
      <td>metinmayi@gmail.com</td>
      <td>2022-01-15</td>
      <td>18:00</td>
      <td>5</td>
      <td>asdsa98231839sad</td>
      <td>
        <GenericButton size="s" handleClick={() => console.log("hey")}>
          Edit
        </GenericButton>
      </td>
      <td>
        <GenericButton size="s" handleClick={() => console.log("hey")}>
          Save
        </GenericButton>
      </td>
    </tr>
  );
};
