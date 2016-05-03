(ns syng-im.components.chat.profile
  (:require [clojure.string :as s]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [syng-im.components.react :refer [android?
                                              view
                                              text
											  text-input
                                              image
                                              navigator
                                              toolbar-android
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
	))
	

					
(defn profile [navigator drawer]
 	(let [group? (:group-chat chat)] 
			 
       [view {:style {:flex  1	                 
                    :backgroundColor "#FFF"
					:flexDirection "column"
					}}
       (when android?
           ;; TODO add IOS version
           [toolbar-android {:navIcon       {:uri "icon_hamburger"}
								 :style         {:backgroundColor color-white
												 :height          56
												 :elevation       2}
								 
								 }
				[view {:style {:flex 1
							   :alignItems "center"
							   :justifyContent "center"
							   :marginRight 112
							   :backgroundColor "transparent"}}
				 [text {:style {:marginTop  -2.5
								:color      text1-color
								:fontSize   16
								:fontFamily font}}
			"Profile"]]])
			
		    [view {:style {:flex .20					  
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
			
			[view {:style {:flex .07
						:alignItems "center" 
						}}			
				[text {:style {:marginTop  -2.5
						 :color      text1-color
						 :fontSize   18                    
						 }}
				"Status" ]					
			]
			
			[view {:style {:flex .13
						:alignItems "center"
						:marginRight 48
						:marginLeft  48
						}}			
				[text {:style {:marginTop  -2.5
						 :color      text1-color
						 :alignItems "center"
						 :textAlign "center"
						 :fontSize   14                    
						 }}
				content (str "The brash businessman’s braggadocio "
						   "and public exchange with candidates "
						   "in the US presidential election") ]					
			]
			
			[view {:style {:flex .12
						:flexDirection "row"
						:alignItems "center" 
						:justifyContent "center"
						}}			
				[view {:style {:height 37  
							:justifyContent "center"
							:backgroundColor "#7099E6"
							:padding 8
							:paddingLeft 20
							:paddingRight 20
							:marginRight 20
							:borderRadius 20
							}}
				[touchable-opacity
				[text {:style {:marginTop  -2.5
							 :color      "white"
							 :fontSize   14                    
							 }}
				"Message"]]	
				]

				[view {:style {:height 37
							:width 38
							:alignItems "center"
							:backgroundColor "#E3EBFA"
							:padding 8
							:borderRadius 19
							}}
					[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text3-color
								 :fontSize   22                    
								 }}
					"˅"]]	
				]
			]
					
			[view {:style {:flex .55	               
						:alignItems "flex-start" 
						:flexDirection "column"	
						:paddingTop 10
						}}
						
				[view {:style {:height 55  
							:justifyContent "center"
							:marginLeft 20
							:borderBottomWidth 1
							:borderBottomColor "#ddd"
							}}
					[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text2-color
								 :fontSize   14                    
								 }}
					"Email"]]
					
					[view {:style {	:height 30
									:borderBottomWidth 0
									:marginLeft -5
							}}
						[text-input 
							{:style {:height 40
									 :fontSize  15 
									 :paddingBottom 15
									 :paddingLeft 5
								}
							 :value "christonphe_t@gmail.com"	
							}
						]
					]						
				] 
		   
				[view {:style {:height 55  
							:justifyContent "center"
							:marginLeft 20
							:borderBottomWidth 1
							:borderBottomColor "#ddd"
							:marginTop 5
							}}
					[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text2-color
								 :fontSize   14                    
								 }}
					"Username"]]
					
					[view {:style {	:height 30
									:borderBottomWidth 0
									:marginLeft -5
							}}
						[text-input 
							{:style {:height 40
									 :fontSize  15 
									 :paddingBottom 15
									 :paddingLeft 5
								}
							 :value "christophe_t"	
							}
						]
					]						
				]	
		   
				[view {:style {:height 55  
							:justifyContent "center"
							:marginLeft 20
							:borderBottomWidth 1
							:borderBottomColor "#ddd"
							:marginTop 5
							}}
					[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text2-color
								 :fontSize   14                    
								 }}
					"URL"]]
					
					[view {:style {	:height 30
									:borderBottomWidth 0
									:marginLeft -5
							}}
						[text-input 
							{:style {:height 40
									 :fontSize  15 
									 :paddingBottom 15
									 :paddingLeft 5
								}
							 :value "http://instagram.com/etherium-wallet"	
							}
						]
					]						
				]	
		   
				[view {:style {:height 55  
							:justifyContent "center"
							:marginLeft 20
							:marginTop 5
							}}
					[touchable-opacity
					[text {:style {:marginTop  -2.5
								 :color      text2-color
								 :fontSize   14                    
								 }}
					"Phone"]]
					
					[view {:style {	:height 30
									:borderBottomWidth 0
									:marginLeft -5
							}}
						[text-input 
							{:style {:height 40
									 :fontSize  15 
									 :paddingBottom 15
									 :paddingLeft 5
								}
							 :value "+1 548 093 98 66"	
							}
						]
					]						
				]	   
					
		   ] 
			
        ]))
