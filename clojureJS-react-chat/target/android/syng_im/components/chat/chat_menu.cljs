(ns syng-im.components.chat.chat_menu
  (:require [clojure.string :as s]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [syng-im.components.react :refer [android?
                                              view
                                              text
                                              image
                                              navigator
                                              toolbar-android
											  drawer-layout-android
											  touchable-opacity
											  ]]  
           [syng-im.resources :as res]											  
           [syng-im.components.styles :refer [font
                                               title-font
                                               color-white
                                               chat-background
                                               online-color
                                               selected-message-color
                                               text1-color
                                               text2-color
											   text3-color 
											   ]]
		   [syng-im.components.chat.profile :refer [profile]]
	))
	

					
(defn chat-menu [navigator drawer]
 	(let [group? (:group-chat chat)] 
			 
       [view {:style {:flex  1	                 
                    :backgroundColor "#FFF"
					:flexDirection "column"
					}}
         
		    [view {:style {:flex .25					  
						:alignItems "center"
						:justifyContent "center"
						}}
						
			[image {:source (if (s/blank? photo-path)
						 res/user-no-photo
						 {:uri photo-path})
			   :style  {:borderRadius 50
						:width        66
						:height       66}}]
						
			] 
					
		    [view {:style {:flex .15
						:alignItems "center"                    			
						}}			
				[text {:style {:marginTop  -2.5
						 :color      text1-color
						 :fontSize   18                    
						 }}
				"Status" ]					
			] 	
					
			[view {:style {:flex .50	               
						:alignItems "flex-start" 
						:flexDirection "column"	
						:paddingTop 10
						}}
						
				[view {:style {:height 40  
							:justifyContent "center"
							:padding 10
							:paddingLeft 20
							}}
				[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text1-color
								 :fontSize   14                    
								 }
						   :onPress (fn []
									(dispatch [:show-profile navigator]))}
					"Profile"]]	
				] 
		   
				[view {:style {:height 40  
							:justifyContent "center"
							:padding 10
							:paddingLeft 20
							}}
				[touchable-opacity
				[text {:style {:marginTop  -2.5
							 :color      text1-color
							 :fontSize   14                    
							 }}
				"Settings"]]
				] 	
		   
				[view {:style {:height 40  
							:justifyContent "center"
							:padding 10
							:paddingLeft 20
							}}
				[touchable-opacity
				[text {:style {:marginTop  -2.5
							 :color      text1-color
							 :fontSize   14                    
							 }}
				"Invite friends"]]
				] 	
		   
				[view {:style {:height 40  
							:justifyContent "center"                    
							
							:padding 10
							:paddingLeft 20
							}}
				[touchable-opacity
				[text {:style {:marginTop  -2.5
							 :color      text1-color
							 :fontSize   14                    
							 }}
				"FAQ"]]
				] 	   
					
		   ] 
					
		   [view {:style {:flex .10	               
						:alignItems "center" 
						}} 
			[touchable-opacity
			[text {:style {:marginTop  -2.5
						 :color      text3-color 
						 :fontSize   14                    
						 }}
		    "Switch User"]]	   
			] 
        ]))
