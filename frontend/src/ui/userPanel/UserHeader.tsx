import Button from "../Button";
import SearchBar from "../SearchBar";

function UserHeader() {
    return (
      <div className="flex w-1/2 gap-5 sm:w-1/2 md:w-full lg:w-1/2">
        <SearchBar />
        <Button>جست و جو</Button>
      </div>
    );
}

export default UserHeader

