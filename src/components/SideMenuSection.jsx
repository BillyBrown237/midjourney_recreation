const SideMenuSection = ({items, heading}) => {
  return(
    <div className="side-menu-section">
      <h5>{heading}</h5>
      <ul>
        {items.map(item=>
          <li key={item.name}>
            <button>
              <img src={item.icon} alt={item.name} /> {item.name} 
            </button>
          </li>
          )                             
        }
      </ul>
    </div>
  )
}

export default SideMenuSection;