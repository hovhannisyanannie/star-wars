export const convertBBY = (bbyDate: string):string => {
    const bbyYear = parseInt(bbyDate, 10); 
    const adYear = 0 - bbyYear; 
    const currentDate = new Date(); 
    currentDate.setFullYear(adYear);     
    return currentDate.toLocaleDateString('en-GB');
}


