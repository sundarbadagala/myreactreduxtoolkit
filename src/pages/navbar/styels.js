export const navLinkStyle=({isActive})=>{
    return{
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'blue' : null,
        textDecoration:'none'
    }

}