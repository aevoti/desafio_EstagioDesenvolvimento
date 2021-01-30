export interface Weather {
	error?: {
		code: number;
		type: string;
	}
	location?: {
		name: string;
		country: string;
		region: string;
		localtime: string;
	}
	current?: {
		observation_time: string;
		temperature: number;
		weather_icons: string[];
		weather_descriptions: string[];
		wind_speed: number;
		precip: number;
		humidity: number;
		feelslike: number;
	}
}