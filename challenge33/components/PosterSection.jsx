import React from "react"
import { nanoid } from "nanoid"

export default function PosterSection({date, festivalData}) {

/*Challenge
	
	Music fans need to know which bands are playing on which days at this year's Scrimbafest! Your task is to make this 
	PosterSection able to handle this job as follows: 
	
		1. The hardcoded paragraphs below should be replaced by iteratively generated paragraphs — 
		   one for each band in the festivalData array that is playing on the day that has been passed into the 
		   component as a prop (July 1, 2, or 3). The *only* bands that should show up in a particular day's 
		   section are the bands that are playing on that day! 
		   
		2. The bands should be ordered by importance (the "importance" property of the objects in 
		   the festivalData array). They are ranked from 1 to 4, with 1 being the 
		   most important and 4 being the least important. If two bands have the same importance, the one that appears 
		   earlier in the array should appear first in the PosterSection. 
		   
		3. Depending on whether a band's importance value is 1, 2, 3, or 4, its paragraph element 
		   should receive a class name of "giant", "big", "medium", or "small", respectively. 
		
		4. If you complete these tasks correctly, you should only see bands playing on July 1 in 
		   the July 1 section, with the most important ones in a large font size on the top and the less important 
		   ones in smaller font sizes below. The same for July 2 and 3. A footer should also automatically appear 
		   at the bottom of the page. 
		   
		Note: nanoid has been imported into this file and can be used to generate unique IDs! 
		   
 */
		const bandsPlayingOnDate = festivalData.filter(band => {
			return band.date === date
		})
		
		let firstString = []
		let secondString = []
		let thirdString = []
		let fourthString = []
		
		bandsPlayingOnDate.forEach(band => {
			if (band.importance === 1) {
				firstString.push(band.name)
			}
			if (band.importance === 2) {
				secondString.push(band.name)
			}
			if (band.importance === 3) {
				thirdString.push(band.name)
			}
			else {
				fourthString.push(band.name)
			}
		})
	
	
        // quicker more consise way to dynamically creat p tags
		// 	const bandElements = festivalData.filter(band => band.date === date)
			// .sort((a, b)=> a.importance - b.importance)
			// .map(band => {
				
			// 	const fonts = {
			// 		1: "giant",
			// 		2: "big",
			// 		3: "medium",
			// 		4: "small"
			// 	}
				
			// 	return <p className={fonts[band.importance]} key={nanoid()}>{band.name}</p>
			// })
		return (
			<div className="lineup-container">
				<div className="day-container">
					<h3>{date}</h3>
				</div>
				
				<p className="giant">{firstString[0]}</p>
				<p className="giant">{firstString[1]}</p>
				<p className="big">{secondString[0]}</p>
				<p className="big">{secondString[1]}</p>
				<p className="medium">{thirdString[0]}</p>
				<p className="medium">{thirdString[1]}</p>
				<p className="small">{fourthString[0]}</p>
	
				
			</div>
		)
}
