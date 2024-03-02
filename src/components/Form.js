export default function Form() {
    return (
        <div className="form">
            <form>
                <div className="fields">
                    <div className="top-text"> 
                        <div>Top text</div>
                        <div><input type="text" placeholder="shut up"/></div>
                    </div>
                    <div className="top-text">
                        <div>Bottom text</div> 
                        <div><input type="text" placeholder="And take my money"/> </div>
                    </div>
                </div>
                <div className="action"><button>Get a new meme image</button></div>
            </form>
        </div>
    )
}