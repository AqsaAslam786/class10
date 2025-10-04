interface IntractiveComponentProps {
    x: number;
    y: number;
    z: number;

}

const IntractiveComponent = ({ x, y, z }: IntractiveComponentProps) => {

    const my_avg = (x: number, y: number, z: number): number => {
        const avg = (x + y + z) / 2;
        return avg
    }

    const isEven = (a: number): boolean => {
        if (a % 2 === 0)
            return true
        else
            return false
    }

    const isOdd = (x: number): boolean => {
        if (x % 2 === 1 )
            return true
        else
            return false
    }

    const numOfCube = (x: number): number =>{
        return x*x*x
    }


    return (
        <div>

            <h1>AvgOfthreenumbers:{my_avg(x, y, z)}</h1>
            <h1>Result:{isEven(1) ? "Even" : "Not Even"}</h1>
            <h1>Result:{isOdd(6)? "Odd" : "Not Odd"}</h1>
            <h1>CubeResult= {numOfCube(3)}</h1>
        </div>
    )
}

export default IntractiveComponent
