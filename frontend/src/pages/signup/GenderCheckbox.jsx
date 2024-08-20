const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" />
                </label>
            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;


// const GenderRadio = () => {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Male</span>
//                     <input type="radio" name="gender" className="radio border-slate-900" value="male" />
//                 </label>
//             </div>

//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input type="radio" name="gender" className="radio border-slate-900" value="female" />
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default GenderRadio;
