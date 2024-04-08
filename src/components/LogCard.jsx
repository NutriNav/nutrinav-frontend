import { CiTrash } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
function LogCard({log, onDelete}) {
    const {name, nutrition_facts} = log 
    const {calories, total_fat, total_carbohydrate, protein} = nutrition_facts
    
    return (
        <div className="flex justify-between bg-white hover:shadow-md rounded-lg p-2 items-center border-2 cursor-pointer">
            <div className="w-full">
                <div className="flex justify-between">
                    <h2 className="font-bold text-primary mb-2">{name}</h2>
                    <div className="mb-2 flex justify">
                        <button 
                            className="mr-2"
                            onClick={()=>onDelete(log)}
                        >
                            <CiTrash size={25} color="red" />
                        </button>

                        {/* <button>
                            <MdOutlineEdit size={25} />
                        </button> */}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="radial-progress text-primary text-center" style={{ "--value": ((calories) / 2000) * 100, "--size": "3rem", "--thickness": "4px", boxShadow: 'inset 0 0 0 4px #e5e7eb' }}
                            role="progressbar">
                            <div>
                                <span className="text-lg text-secondary font-bold">{calories}</span>
                            </div>
                        </div>
                        <p className="text-center text-base-400 text-xs">Calories</p>
                    </div>
                    <div>
                        <div className="radial-progress text-primary text-center " style={{ "--value": (total_carbohydrate / 275) * 100, "--size": "3rem", "--thickness": "4px", boxShadow: 'inset 0 0 0 4px #e5e7eb' }}
                            role="progressbar">
                            <div>
                                <span className="text-lg text-secondary font-bold">{total_carbohydrate}g</span>
                            </div>
                        </div>
                        <p className="text-center text-base-400 text-xs">Carbs</p>
                    </div>
                    <div>
                        <div className="radial-progress text-primary text-center " style={{ "--value": (total_carbohydrate / 275) * 100, "--size": "3rem", "--thickness": "4px", boxShadow: 'inset 0 0 0 4px #e5e7eb' }}
                            role="progressbar">
                            <div>
                                <span className="text-lg text-secondary font-bold">{total_fat}g</span>
                            </div>
                        </div>
                        <p className="text-center text-base-400 text-xs">Fats</p>
                    </div>
                    <div>
                        <div className="radial-progress text-primary text-center " style={{ "--value": (protein / 50) * 100, "--size": "3rem", "--thickness": "4px", boxShadow: 'inset 0 0 0 4px #e5e7eb' }}
                            role="progressbar">
                            <div>
                                <span className="text-lg text-secondary font-bold">{protein}g</span>
                            </div>
                        </div>
                        <p className="text-center text-base-400 text-xs">Protein</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogCard;