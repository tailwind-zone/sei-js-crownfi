export declare enum PositionDirection {
    LONG = 0,
    SHORT = 1,
    UNRECOGNIZED = -1
}
export declare const PositionDirectionSDKType: typeof PositionDirection;
export declare function positionDirectionFromJSON(object: any): PositionDirection;
export declare function positionDirectionToJSON(object: PositionDirection): string;
export declare enum PositionEffect {
    OPEN = 0,
    CLOSE = 1,
    UNRECOGNIZED = -1
}
export declare const PositionEffectSDKType: typeof PositionEffect;
export declare function positionEffectFromJSON(object: any): PositionEffect;
export declare function positionEffectToJSON(object: PositionEffect): string;
export declare enum OrderType {
    LIMIT = 0,
    MARKET = 1,
    /** FOKMARKET - fill-or-kill market order */
    FOKMARKET = 3,
    /** FOKMARKETBYVALUE - fill-or-kill market by value order */
    FOKMARKETBYVALUE = 4,
    STOPLOSS = 5,
    STOPLIMIT = 6,
    UNRECOGNIZED = -1
}
export declare const OrderTypeSDKType: typeof OrderType;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum Unit {
    STANDARD = 0,
    MILLI = 1,
    MICRO = 2,
    NANO = 3,
    UNRECOGNIZED = -1
}
export declare const UnitSDKType: typeof Unit;
export declare function unitFromJSON(object: any): Unit;
export declare function unitToJSON(object: Unit): string;
export declare enum OrderStatus {
    PLACED = 0,
    FAILED_TO_PLACE = 1,
    CANCELLED = 2,
    FULFILLED = 3,
    UNRECOGNIZED = -1
}
export declare const OrderStatusSDKType: typeof OrderStatus;
export declare function orderStatusFromJSON(object: any): OrderStatus;
export declare function orderStatusToJSON(object: OrderStatus): string;
export declare enum CancellationInitiator {
    USER = 0,
    LIQUIDATED = 1,
    UNRECOGNIZED = -1
}
export declare const CancellationInitiatorSDKType: typeof CancellationInitiator;
export declare function cancellationInitiatorFromJSON(object: any): CancellationInitiator;
export declare function cancellationInitiatorToJSON(object: CancellationInitiator): string;
