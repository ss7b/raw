import React from 'react'
import RandomCard from '../_components/randomCard'


function LaterId() {
  return (
    <div className='container mx-auto px-4 '>
        <div className='my-20 flex flex-col lg:flex-row gap-5 items-start'>
            <div className="card dark:bg-gray-900 w-full lg:w-1/2  shadow-xl ">
                <div className="card-body">
                    <h2 className=" text-center text-4xl dark:text-white">عنوان القصيدة</h2>
                    <hr/>
                    <p style={{
                            textAlign: 'center',
                            fontSize: '30px',
                            margin:' 10px 0',
                            lineHeight: '2',
                        }} className='dark:text-white'>
                        واحرَّ قَلباهُ مِمَّن قَلبُهُ شَبِمُ
                        <br/>
                        وَمَن بِجِسمي وَحالي عِندَهُ سَقَمُ
                        <br/>
                        مالي أكَتِّمُ حُبّاً قَد بَرى جَسَدي
                        <br/>
                        وتَدَّعي حبَّ سيفِ الدَولَةِ الأمَمُ
                        <br/>
                        إن كانَ يَجمَعُنا حبٌّ لِغُرَّتِهِ
                        <br/>
                        فليتَ أنَّا بِقَدْرِ الحبِّ نَقتسِمُ
                        <br/>
                        قَد زُرتُهُ وسيوفُ الهندِ مُغمَدَةٌ
                        <br/>
                        وقد نظرتُ إليه والسُيوفُ دَمُ
                        <br/>
                        فَكانَ أحْسنَ خَلق الله كلِّهِمُ
                        <br/>
                        وكانَ أحسنَ مافي الأحسَنِ الشِّيَمُ
                    </p> 
                    
                    
                    <div className="card-actions justify-end">
                        <audio controls className='w-screen'>
                        <source src="/vioce/v.mpeg" type="audio/mpeg" />
                        </audio> 
                    </div>
                </div>
            </div>
            <div className='flex flex-col  bg-gray-900 w-full lg:w-1/2 px-2 rounded-sm'>
                <h2 className=" dark:text-white my-3 text-4xl"> قصايد مقترحة </h2>
                <RandomCard/>
                <RandomCard/>
                <RandomCard/>
                <RandomCard/>
                <RandomCard/>
                
            </div>
         </div>
    </div>
    
  )
}

export default LaterId

