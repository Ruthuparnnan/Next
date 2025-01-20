import { FOLDER_DATA } from "../constant";
import FolderItem from "./folder-item";

function FolderClone() {
  return (
    <>
      {FOLDER_DATA?.map((item, index) => (
        <FolderItem key={item?.name} data={item} />
      ))}
    </>
  );
}

export default FolderClone;
