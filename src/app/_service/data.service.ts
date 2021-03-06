import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class DataService {
	private readonly chargerTypeFilterSubject: BehaviorSubject<string>;
	public chargerTypeFilter: Observable<string>;

	private readonly distanceFilterSubject: BehaviorSubject<number>;
	public distanceFilter: Observable<number>;

	private readonly connectorTypeFilterSubject: BehaviorSubject<string>;
	public connectorTypeFilter: Observable<string>;

	private readonly availableFilterSubject: BehaviorSubject<boolean>;
	public availableFilter: Observable<boolean>;

	private readonly filterSubject: BehaviorSubject<any>;
	public filter: Observable<any>;

	private readonly startChargeSubject: BehaviorSubject<any>;
	public startCharge: Observable<any>;

	private readonly startTransactionSubject: BehaviorSubject<any>;
	public startTransaction: Observable<any>;

	constructor() {
		this.chargerTypeFilterSubject = new BehaviorSubject<string>('');
		this.chargerTypeFilter = this.chargerTypeFilterSubject.asObservable();

		this.distanceFilterSubject = new BehaviorSubject<number>(20);
		this.distanceFilter = this.distanceFilterSubject.asObservable();

		this.connectorTypeFilterSubject = new BehaviorSubject<string>('');
		this.connectorTypeFilter = this.connectorTypeFilterSubject.asObservable();

		this.availableFilterSubject = new BehaviorSubject<boolean>(false);
		this.availableFilter = this.availableFilterSubject.asObservable();

		this.filterSubject = new BehaviorSubject<any>({
			distance: 20
		});
		this.filter = this.filterSubject.asObservable();

		this.startChargeSubject = new BehaviorSubject<any>(null);
		this.startCharge = this.startChargeSubject.asObservable();

		this.startTransactionSubject = new BehaviorSubject<any>(null);
		this.startTransaction = this.startTransactionSubject.asObservable();
	}

	public get getFilter(): any {
		return this.filterSubject.value;
	}

	updateFilter(obj: any) {
		this.filterSubject.next(obj);
	}

	public get getStartTransactionData(): any {
		return this.startTransactionSubject.value;
	}

	updateStartTransaction(obj: any) {
		this.startTransactionSubject.next(obj);
	}

	public get getStartChargeData(): any {
		return this.startChargeSubject.value;
	}

	updateStartChargeCode(obj: any) {
		this.startChargeSubject.next(obj);
	}

	public get getAvailabilityForFilter(): boolean {
		return this.availableFilterSubject.value;
	}

	updateAvailabilityForFilter(available: boolean) {
		this.availableFilterSubject.next(available);
	}

	public get getConnectorTypeForFilter(): string {
		return this.connectorTypeFilterSubject.value;
	}

	updateConnectorTypeForFilter(connectorType: string) {
		this.connectorTypeFilterSubject.next(connectorType);
	}

	public get getDistanceForFilter(): number {
		return this.distanceFilterSubject.value;
	}

	updateDistanceForFilter(distance: number) {
		this.distanceFilterSubject.next(distance);
	}

	public get getChargerTypeForFilter(): string {
		return this.chargerTypeFilterSubject.value;
	}

	updateChargerTypeForFilter(chargerType: string) {
		this.chargerTypeFilterSubject.next(chargerType);
	}

}
