	.file	"crtbrand.c"
	.section	.note.android.ident,"a",@progbits
	.align 4
	.type	abitag, @object
	.size	abitag, 24
abitag:
	.long	8
	.long	4
	.long	1
	.string	"Android"
	.long	21
	.ident	"GCC: (GNU) 4.8"
	.section	.note.GNU-stack,"",@progbits
