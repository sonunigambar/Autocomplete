import react from 'react';
import menu_data from './menu-bar.json';
import './_menuBar.scss';

const renderMenu = (menu) =>{
    return menu.map((item)=>(
        <>
           {
               item.children ? (
                   <div className="menuItem submenu">
                        <i class={"fa "+"fa-"+item.name} aria-hidden="true"></i>
                        <span class="menuLbl">{item.name}</span>
                        <span>
                            <i class="fa fa-chevron-down pullright" aria-hidden="true"></i>
                            <i class="fa fa-chevron-up pullright" aria-hidden="true"></i>
                        </span>
                       <div className="submenubar">
                           {renderMenu(item.children)}
                       </div>
                   </div>
               ) : (
                    <div class="menuItem">
                        {item.name=== "Home" ? <i class="fa fa-home" aria-hidden="true"></i> : null}
                        <span class={"menuLbl "+item.name}><a href={item.url}>{item.name}</a></span>
                    </div>
               )
           }
        </>
    ))
 }
const Sticky = ()=>{
    
    return (
    <>
    <div className="header">Header</div>
        <div className="menu-wrapper">
            <div class="menubar">
                {renderMenu(menu_data)}
            </div>
        </div>
        <div className="container">
                <div className="wrapper intro">
                    <p>
                        Welcome to .
                    </p>
                    <div class="landing slice spaced-top">
                       <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                       <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                        <div class="slice-item tile">
                            <div class="tileTitle"><span>DEF</span></div>
                            <div class="tileBody spaced-top">Use <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a></div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
export default Sticky;