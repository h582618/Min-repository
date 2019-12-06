package EksamenøvingH18_2;

public abstract class Abonnement {
	private String fødselsnummer;
	private int telefonnummer;
	private double minuttpris;
	
	public Abonnement(String fn, int tn, double mp) {
		fødselsnummer = fn;
		telefonnummer = tn;
		minuttpris = mp;
	}
	
	public String getFødselsnummer() {
		return fødselsnummer;
	}
	public void setFødselsnummer(String fn) {
		fødselsnummer = fn;
	}
	public int getTelefonnummer() {
		return telefonnummer;
	}
	public void setTelefonnummer(int tn) {
		telefonnummer = tn;
	}
	public double getMinuttpris() {
		return minuttpris;
	}
	public void setMinuttpris(double mp) {
		minuttpris = mp;
	}
	
	public abstract double pris(int tn, double samtalelengde);
	
	

}
