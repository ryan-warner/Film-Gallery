import HeaderItem from './HeaderItem';
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";

function Header(props) {
  const headerItemsReact = [];
  const headerItems = [
    {heading: "About"},
    {heading: "FAQ"},
    {heading: "Sign Out"}
  ]
  const pageTitleContent = {"heading": "Filmstrip"};
  const width = window.innerWidth;

  const pageTitle = <HeaderItem disabled={true} classProps="text-opacity-100 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent" item={pageTitleContent}/>;
  var counter = 0
  
  headerItems.forEach(element => {
    headerItemsReact.push(<HeaderItem classProps="text-opacity-70 hover:text-opacity-100" click={() => console.log("clicked")} item={element} key={counter+=1} />)
  });

  return (
    <div className="h-16 flex justify-between w-full md:p-8 px-4 py-4 text-2xl font-medium items-center absolute z-10">
      {pageTitle}
      <div className="flex flex-row w-auto h-full gap-4 text-xl font-light items-center">
        {
            width < 640 ? 
                (props.menuState ? 
                    <XIcon className="h-full flex-shrink stroke-1" onClick={() => console.log("menu clicked")}/> : 
                    <MenuIcon className="h-full flex-shrink stroke-1" onClick={() => console.log("menu clicked")}/>
                ) : 
            headerItemsReact}
      </div>
    </div>
  );
}

export default Header;
