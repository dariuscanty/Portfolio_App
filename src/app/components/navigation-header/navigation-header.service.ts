import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme.interface';

@Injectable({
    providedIn: 'root'
})
export class NavigationHeaderService {

    private themes = new BehaviorSubject<Theme>({ prevTheme: 'dark-mode', currTheme: 'light-mode', icon: 'dark_mode'});
    
    constructor(private http: HttpClient) { }

    getResume() {
        return this.http.get('assets/Darius_Canty_Resume.pdf', { responseType: 'blob' });
    }

    switchThemes() {
        const _themes = this.themes.getValue();

        this.themes.next({ 
            prevTheme: _themes.currTheme, 
            currTheme: _themes.prevTheme,
            icon: _themes.icon === 'light_mode' ? 'dark_mode' : 'light_mode'
        });
    }

    getThemes() {
        return this.themes.asObservable();
    }
}