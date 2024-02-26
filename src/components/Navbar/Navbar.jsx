import CartWidget from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'

const Navbar = () => {
    console.log(classes)
    return (
        <header className={classes.header}>
            <h4>Cafetería Triciclo</h4>
            <nav>
                <a className='btn btn-primary'>Café en grano</a>
                <a className='btn btn-secondary'>Vasos y tazas</a>
                <a className='btn btn-secondary'>Cafeteras</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar