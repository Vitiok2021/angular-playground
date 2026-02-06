import { Component, inject, Input, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-coin-detail',
  imports: [],
  templateUrl: './coin-detail.component.html',
  styleUrl: './coin-detail.component.scss',
})
export class CoinDetailComponent implements OnInit {
  private cryptoService = inject(CryptoService);
  @Input() id = '';
  ngOnInit(): void {
    console.log('Id монети з URL', this.id);
    this.cryptoService.getCoin(this.id).subscribe((data) => {
      console.log('Повне досьє:', data);
    });
  }
}
