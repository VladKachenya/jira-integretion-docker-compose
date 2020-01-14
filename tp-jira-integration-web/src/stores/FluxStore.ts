import { EventEmitter } from 'events';
import Flux from 'flux';

const CHANGE_EVENT = 'change';

export class FluxStore<TState> {
    _changed: boolean;
    _emitter: EventEmitter;
    dispatchToken: string;
    _dispatcher: any;
    _cleanStateFn: () => TState;
    _state: TState;

    constructor(dispatcher: any, cleanStateFn: () => TState) {
        this._emitter = new EventEmitter();
        this._changed = false;
        this._dispatcher = dispatcher;
        this.dispatchToken = dispatcher.register( (payload: any) => {
            this._invokeOnDispatch(payload);
        });

        this._cleanStateFn = cleanStateFn;
        this._state = this._cleanStateFn();
    }

    /**
     * Is idempotent per dispatched event
     */
    emitChange() {
        this._changed = true;
    }

    hasChanged() { return this._changed; }

    addChangeListener(callback: any) {
        this._emitter.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: any) {
        this._emitter.removeListener(CHANGE_EVENT, callback);
    }

    _cleanState() {
        this._changed = false;
        this._state = this._cleanStateFn();
    }

    _invokeOnDispatch(payload: any) {
        this._changed = false;
        this._onDispatch(payload);
        if (this._changed) {
            this._emitter.emit(CHANGE_EVENT);
        }
    }

    _onDispatch(payload: any) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(`${this.constructor.name} has not overridden FluxStore.__onDispatch(), which is required`); // eslint-disable-line no-console
        }
    }
}